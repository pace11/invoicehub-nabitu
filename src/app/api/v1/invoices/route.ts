/* eslint-disable @typescript-eslint/no-unused-vars */
import { clientPromise } from '@/lib/mongoClient'
import { NextRequest, NextResponse } from 'next/server'

export async function GET() {
  try {
    const client = await clientPromise
    const db = client.db(`${process.env.MONGODB_NAME}`)
    const response = await db
      .collection(`${process.env.MONGODB_COLLECTION}`)
      .find()
      .toArray()

    if (response.length === 0) {
      return NextResponse.json({
        message: 'Resources not found',
        data: null,
      })
    }

    return NextResponse.json({
      message: 'Ok',
      data: response,
    })
  } catch (error) {
    return NextResponse.json(
      { success: false, message: 'Operation unsuccessful' },
      { status: 500 },
    )
  }
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json()
    const client = await clientPromise
    const db = client.db(`${process.env.MONGODB_NAME}`)
    const response = await db
      .collection(`${process.env.MONGODB_COLLECTION}`)
      .insertOne(body)

    return NextResponse.json(response)
  } catch (error) {
    return NextResponse.json(
      { success: false, message: 'Operation unsuccessful' },
      { status: 500 },
    )
  }
}
