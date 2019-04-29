const test = (ajaxinstance) => {
  const api = {}

  api.getSysCountryCode = () => ajaxinstance({
    method: 'GET',
    url: '/v1/test/country-code'
  })

  return api
}

export default test
