import Layout from '@/components/layouts/mobile'
import { toast } from 'react-toastify'
import { themesMap } from '@/shared/constants'
import { GetServerSideProps } from 'next'

const handleToast = () => {
  toast('Loading...', {
    // toastId: "123",
    position: "bottom-center",
    autoClose: 3000,
    style: { marginTop: "20px",  marginBottom: "0px" },
  });
};

export default function HostSession({ themeID }: { themeID: string }) {
  console.log(themeID);
  
  return (
    <>
      <p className="text-xl font-semibold">
        Session is Active
      </p>
      <p className="text-sm text-gray-600 mt-1">
        Theme: <span className="text-blue-600 font-semibold">{themesMap.get(themeID)}</span>
      </p>
    </>
  )
}

export const getServerSideProps: GetServerSideProps<{ themeID: string }> = async (context) => {
  // get query params
  const { theme } = context.query;
  return {
    props: {
      themeID: theme as string,
    },
  };
}

HostSession.getLayout = function getLayout(page: React.ReactElement) {
  return <Layout>{page}</Layout>;
}