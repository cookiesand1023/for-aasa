import { NextResponse } from 'next/server'

export function GET() {
  const json = {
    applinks: {
      details: [
        {
          appIDs: ['484Z9E6GB6.com.youpacefans.app'],
          components: [
            {
              '/': '/invitation/*',
              comment: 'Matches invitation links to open in the app',
            },
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