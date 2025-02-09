import Axios from 'axios'
import { useCallback, useEffect, useState } from 'react'

export const useQueriesMutation = ({
  enabled = true,
  endpoint,
}: {
  enabled?: boolean
  endpoint?: string
}) => {
  const [data, setData] = useState<null>(null)
  const [loading, setLoading] = useState<boolean>(true)
  const [error, setError] = useState<string | null>(null)

  const [dataMutation, setDataMutation] = useState({
    dataMutation: null,
    isLoadingMutation: true,
    errorMutation: null,
  })

  const fetchingData = useCallback(
    async ({ params }: { params?: object }) => {
      try {
        const response = await Axios({
          method: 'GET',
          url: `/api/v1${endpoint}`,
          params,
        })

        setData(response?.data)
      } catch (error) {
        setLoading(false)
        setError(error)
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
    try {
      const response = await Axios({
        url: `/api/v1/${endpoint}`,
        method,
        data: body,
      })

      setData((prevData) => ({ ...prevData }))
    } catch (error) {
      setData((prevData) => ({ ...prevData, isLoading: false, error }))
    } finally {
      setData((prevData) => ({ ...prevData, isLoading: false }))
    }
  }

  useEffect(() => {
    if (enabled) {
      fetchingData({})
    }
  }, [enabled, fetchingData])

  return { data, loading, error, refetch, mutate }
}
