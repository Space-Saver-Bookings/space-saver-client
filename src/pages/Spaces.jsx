import Button from '../components/buttons/Button';
import DashItem from '../components/dashboard/DashItem';

const spaces = Array.from(Array(4), (_, idx) => `Space ${idx + 1}`);

function Spaces() {
  return (
    <section className="flex flex-col gap-6">
      <div className="flex justify-center">
        <Button>Joined Spaces</Button>
      </div>

      {/* TODO: Fix flex card item alignment, not with justify-center, figure something out
                might be an issue with the section or main container
      */}
      <section className="flex flex-wrap gap-5">
        {spaces.map((space) => (
          <DashItem
            key={space}
            styling="w-[20rem] h-[14.5rem]"
            heading={space}
            headingStyling="self-center my-auto"
          />
        ))}

        <DashItem
          styling="w-[20rem] h-[14.5rem]"
          heading="Join Space +"
          bgColor="bg-slate-300"
          headingStyling="self-center my-auto"
        />
      </section>
    </section>
  );
}

export default Spaces;
