export const proxyHelper = async (serviceUrl: string, req: Request) => {
  try {
    const url = new URL(req.url);
    const targetUrl = `${serviceUrl}${url.pathname}${url.search}`;
    
    // Forward the exact request to the microservice
    const response = await fetch(new Request(targetUrl, req));
    return response;
  } catch (error) {
    console.error(`Proxy Error to ${serviceUrl}:`, error);
    throw new Error('Service Unavailable');
  }
};