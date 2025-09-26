# CORS Tester UI

A user-friendly tool for testing HTTP endpoints and diagnosing CORS (Cross-Origin Resource Sharing) issues. Built with Angular 20.

## Features

- Send HTTP requests with custom headers and body
- Test CORS configurations
- Monitor response headers and status codes
- Built-in support for common CORS headers
- User-friendly interface
- JSON request/response formatting

## Live Demo

Visit the live application at: https://jenkaby.github.io/cors-tester-ui/

## Setup

### Local Development

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the development server:
   ```bash
   npm start
   ```
4. Open your browser to `http://localhost:4200`

### Deployment

The application is automatically deployed to GitHub Pages when changes are pushed to the master branch. The deployment process:

1. Builds the application with proper base href
2. Uploads the build artifacts
3. Deploys to GitHub Pages

To deploy manually:
1. Push your changes to the master branch
2. GitHub Actions will automatically build and deploy
3. Visit the GitHub Pages URL for your repository

## How to Use

### Basic Usage

1. **URL and Method**
   - Enter the target URL
   - Select the HTTP method (GET, POST, PUT, DELETE, PATCH, HEAD, OPTIONS)

2. **Headers**
   The app includes common CORS-related headers by default:
   - `Content-Type: application/json` - for proper JSON handling
   - `Origin: http://localhost:4200` - to test CORS policies
   
   Add more headers as needed, one per line in the format "Header-Name: Value".

3. **Request Body**
   - For POST/PUT/PATCH methods, enter your JSON request body
   - The body will be automatically formatted as JSON

4. **Send Request**
   - Click the "Send Request" button to make the call
   - Watch the response section for results

5. **Examine Response**
   - HTTP status code and message
   - Response headers (check for CORS-related headers)
   - Response body (formatted JSON if applicable)

### Monitoring CORS Preflight Requests

To see the full CORS interaction, including preflight requests:

1. Open browser Developer Tools
   - Press F12 or right-click → Inspect
   - Go to the "Network" tab
   - Check the "Preserve log" option to keep all requests visible

2. Watch for Preflight
   - Look for `OPTIONS` requests that happen before your actual request
   - These are CORS preflight checks
   - Examine both the preflight request and the actual request to debug CORS issues

### Common CORS Headers to Check

- `Access-Control-Allow-Origin`: Check which origins are allowed
- `Access-Control-Allow-Methods`: Available HTTP methods
- `Access-Control-Allow-Headers`: Permitted request headers

## Development

- Built with Angular 20
- Uses standalone components
- Reactive forms for input handling
- Strong typing with interfaces
- Clean and responsive UI
- Error handling
- Loading states

## Contributing

1. Fork the repository
2. Create your feature branch
3. Commit your changes
4. Push to the branch
5. Create a new Pull Request

## License

MIT License - feel free to use this tool for any purpose.
