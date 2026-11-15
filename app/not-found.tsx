// A copy of Next's default 404, which this site used before moving to Vite.
export default function NotFound() {
  return (
    <div className="h-dvh flex flex-col items-center justify-center text-center bg-[#fff] text-[#000] dark:bg-[#000] dark:text-[#fff] font-[system-ui,'Segoe_UI',Roboto,Helvetica,Arial,sans-serif]">
      <div>
        <h1 className="inline-block align-top mr-5 pr-[23px] border-r border-[rgba(0,0,0,.3)] dark:border-[rgba(255,255,255,.3)] text-[24px] font-medium leading-[49px]">
          404
        </h1>
        <div className="inline-block">
          <h2 className="text-[14px] font-normal leading-[49px]">
            This page could not be found.
          </h2>
        </div>
      </div>
    </div>
  );
}
