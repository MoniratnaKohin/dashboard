const getAprQuery = (address: string) => {
    return {
        query: `query MyQuery($address: String!) {
   liquidityPoolContracts(
    where: {coreAddress: $address}
  ) {
    coreAddress
    apr
    rawTvl
  }
}`,
        variables: {
            address: address,
        },
    };
};
export default getAprQuery;