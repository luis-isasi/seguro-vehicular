import type { AppProps } from 'next/app'

import '../styles/globals.css'

import { QueryClient, QueryClientProvider } from 'react-query'
import { ContextUserProvider } from '@Context/contextUser'

//creating a query client
const queryClient = new QueryClient()

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <QueryClientProvider client={queryClient}>
      <ContextUserProvider>
        <Component {...pageProps} />
      </ContextUserProvider>
    </QueryClientProvider>
  )
}

export default MyApp
