import Axios from 'axios'
import { useCallback, useEffect, useState } from 'react'

export const useQueriesMutation = <T = unknown,>({
  enabled = true,
  endpoint,
}: {
  enabled?: boolean
  endpoint?: string
}) => {
  const [data, setData] = useState<T | null>(null)
  const [loading, setLoading] = useState<boolean>(true)
  const [error, setError] = useState<string | null>(null)
  const [loadingMutation, setLoadingMutation] = useState<boolean>(false)
  const [successMutation, setSuccessMutation] = useState<boolean>(false)
  const [errorMutation, setErrorMutation] = useState<string | null>(null)

  const fetchingData = useCallback(
    async ({ params }: { params?: object }) => {
      try {
        const response = await Axios.get<T>(`/api/v1${endpoint}`, { params })

        setData(response?.data)
      } catch (error) {
        setLoading(false)
        if (error instanceof Error) {
          setError(error.message)
        } else {
          setError('An unknown error occurred')
        }
      } finally {
        setLoading(false)
      }
    },
    [endpoint],
  )

  const refetch = ({ params }: { params?: object }) => fetchingData({ params })

  const mutate = async ({
    body,
    method = 'POST',
  }: {
    body: object
    method?: string
  }) => {
    setLoadingMutation(true)
    try {
      const response = await Axios({
        url: `/api/v1/${endpoint}`,
        method,
        data: body,
      })

      if (!!response.data.acknowledged) {
        setLoadingMutation(false)
        setSuccessMutation(true)
      }
    } catch (error) {
      setSuccessMutation(false)
      if (error instanceof Error) {
        setErrorMutation(error.message)
      } else {
        setErrorMutation('An unknown error occurred')
      }
    } finally {
      setTimeout(() => {
        setSuccessMutation(false)
      }, 2000)
    }
  }

  useEffect(() => {
    if (enabled) {
      fetchingData({})
    }
  }, [enabled, fetchingData])

  return {
    data,
    loading,
    error,
    refetch,
    mutate,
    successMutation,
    loadingMutation,
    errorMutation,
  }
}
