import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { getEstablishments, establishmentList } from 'store/establishment';

import Login from 'views/Login';
import Setup from 'views/Setup';
import PageWrapper from 'components/PageWrapper';

function Index() {
  const dispatch = useDispatch();
  const establishment = useSelector(establishmentList);

  useEffect(() => {
    dispatch(getEstablishments());
  }, [dispatch]);

  return (
    <PageWrapper isLoading={establishment.loading}>
      {establishment.list.length ? <Login /> : <Setup />}
    </PageWrapper>
  );
}

export default Index;
