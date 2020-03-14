export const tileInFilters = (
  expLevel,
  exp,
  newTechnology,
  oldTechnology,
  city,
  companyAddress,
  remote
) =>
  (expLevel === '' || expLevel === exp) &&
  (newTechnology === '' || oldTechnology === newTechnology) &&
  (city === companyAddress[1] ||
    city === '' ||
    (remote && city === 'Remote') ||
    (city === 'Trójmiasto' &&
      (companyAddress[1] === 'Gdańsk' ||
        companyAddress[1] === 'Gdynia' ||
        companyAddress[1] === 'Sopot')));
