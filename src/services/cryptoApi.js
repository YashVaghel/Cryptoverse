import { createApi,fetchBaseQuery } from '@reduxjs/toolkit/query/react'


const cryptoApiHeaders = {
    'X-RapidAPI-Key': '1c447fc96cmsh1268c84f3fca800p1277d5jsnf68bfbc79f6d',
    'X-RapidAPI-Host': 'coinranking1.p.rapidapi.com'
}
const baseUrl = 'https://coinranking1.p.rapidapi.com';

const createRequest = (url) => ({url,headers:cryptoApiHeaders})
export const cryptoApi = createApi({
  reducerPath: 'cryptoApi',
  baseQuery: fetchBaseQuery({ baseUrl }),
  endpoints: (builder) => ({
      getCryptos: builder.query({
          query: (count) => createRequest(`/coins?limit=${count}`)
      }),
      getCryptoDetails: builder.query({
          query: (coinId) => createRequest(`/coin/${coinId}`)
      }),
      getCryptoHistory: builder.query({
          query: ({ coinId, timePeriod}) => createRequest(`/coin/${coinId}/history?timePeriod=${timePeriod}`)
      }),
      getExchanges: builder.query({
        query: () => createRequest('/exchanges'),
      }),
  })
});

export const {
    useGetCryptosQuery,
    useGetCryptoDetailsQuery,
    useGetExchangesQuery,
    useGetCryptoHistoryQuery,
  } = cryptoApi;
