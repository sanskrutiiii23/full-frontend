#!/usr/bin/env python3
"""
CITRIX Local Server Runner
Serves the CITRIX Landing Page and React Workspace with SPA routing support.
"""

import http.server
import socketserver
import os
import sys
import urllib.parse

PORT = 8000
BASE_DIR = os.path.dirname(os.path.abspath(__file__))

class Handler(http.server.SimpleHTTPRequestHandler):
    def __init__(self, *args, **kwargs):
        super().__init__(*args, directory=BASE_DIR, **kwargs)

    def end_headers(self):
        self.send_header('Cache-Control', 'no-cache, no-store, must-revalidate')
        self.send_header('Pragma', 'no-cache')
        self.send_header('Expires', '0')
        super().end_headers()

    def do_GET(self):
        parsed_url = urllib.parse.urlparse(self.path)
        req_path = parsed_url.path

        # Direct physical file exists
        clean_path = req_path.lstrip('/')
        full_path = os.path.join(BASE_DIR, clean_path)

        if clean_path and os.path.isfile(full_path):
            return super().do_GET()

        # Root request
        if req_path in ('', '/', '/index.html'):
            self.path = '/index.html'
            return super().do_GET()

        # SPA Routes (e.g. /login, /workspace, /admin, /coordinator, /faculty, /club, /student, /campus, etc.)
        workspace_file = os.path.join(BASE_DIR, 'workspace.html')
        if os.path.exists(workspace_file):
            self.path = '/workspace.html'
            return super().do_GET()

        return super().do_GET()

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
    print(f"  Landing Page:   http://localhost:{active_port}/")
    print(f"  Workspace:      http://localhost:{active_port}/login")
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
