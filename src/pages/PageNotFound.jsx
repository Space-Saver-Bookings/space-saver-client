import {useMoveBack} from '../hooks/useMoveBack';

function PageNotFound() {
  const moveBack = useMoveBack();
  return (
    <main className='h-screen bg-slate-50 flex items-center justify-center p-[4.8rem]'>
      <section className="font-coplette bg-slate-100 rounded-md border p-[4.8rem] flex flex-col flex-grow-0 flex-shrink basis-[96rem] text-center">
        <h1 className="text-3xl mb-[3.2rem]">
          The page you are looking for could not be found.
        </h1>
        <button onClick={moveBack}>&larr; Go back</button>
      </section>
    </main>
  );
}

export default PageNotFound;
