#!/usr/bin/env python3
"""
CITRIX Local Server Runner
Serves the CITRIX frontend on http://localhost:8000 with CORS and proper MIME types.
"""

import http.server
import socketserver
import webbrowser
import sys

PORT = 8000

class Handler(http.server.SimpleHTTPRequestHandler):
    def end_headers(self):
        self.send_header('Cache-Control', 'no-cache, no-store, must-revalidate')
        self.send_header('Pragma', 'no-cache')
        self.send_header('Expires', '0')
        super().end_headers()

def main():
    preferred_port = int(sys.argv[1]) if len(sys.argv) > 1 and sys.argv[1].isdigit() else PORT
    socketserver.TCPServer.allow_reuse_address = True
    
    httpd = None
    active_port = preferred_port
    for p in range(preferred_port, preferred_port + 50):
        try:
            httpd = socketserver.TCPServer(("", p), Handler)
            active_port = p
            break
        except OSError:
            continue

    if not httpd:
        print(f"Error: Could not bind to any port between {preferred_port} and {preferred_port + 50}")
        sys.exit(1)

    print("=" * 60)
    print(f"  CITRIX · Chilika Institute of Technology")
    print(f"  Server running live at: http://localhost:{active_port}")
    print(f"  Press Ctrl+C to terminate the server.")
    print("=" * 60)
    try:
        httpd.serve_forever()
    except KeyboardInterrupt:
        print("\nShutting down server.")
        sys.exit(0)

if __name__ == '__main__':
    main()
