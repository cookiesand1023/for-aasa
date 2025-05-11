import { NextResponse } from 'next/server'

export function GET() {
  const json = [
    {
      relation: ['delegate_permission/common.handle_all_urls'],
      target: {
        namespace: 'android_app',
        package_name: 'com.youpacefans.app',
        sha256_cert_fingerprints: [
          'YOUR_SHA256_CERT_FINGERPRINT'
        ]
      }
    }
  ]

  return new NextResponse(JSON.stringify(json), {
    status: 200,
    headers: {
      'Content-Type': 'application/json',
    },
  })
}
