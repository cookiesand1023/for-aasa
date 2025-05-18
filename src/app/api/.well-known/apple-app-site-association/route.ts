import { NextResponse } from 'next/server'

export function GET() {
  const json = {
    applinks: {
      details: [
        {
          appIDs: ['484Z9E6GB6.com.youpacefans.app'],
          paths: [
            '/invitation/*',
          ],
        },
      ],
    },
  }

  return new NextResponse(JSON.stringify(json), {
    status: 200,
    headers: {
      'Content-Type': 'application/json',
    },
  })
}
