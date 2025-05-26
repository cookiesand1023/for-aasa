import { NextResponse } from 'next/server'

export function GET() {
  const json = [
    {
      "relation": ["delegate_permission/common.handle_all_urls"],
      "target": {
        "namespace": "android_app",
        "package_name": "com.youpacefans.app",
        "sha256_cert_fingerprints": [
          "2E:A3:5C:94:E7:35:24:7A:A0:EE:00:DE:97:F4:92:78:BB:AD:89:D4:AA:11:CE:2E:4B:FD:EA:6E:C3:5E:85:CD"
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