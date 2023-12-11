import DashItem from "../components/dashboard/DashItem";

function Space() {
  // TODO: Add fecthing logic to dynamically display content of each space
  // Use the space ID from the url param to fetch the correct & desired space

  // Example query
  // const dynamicHeading = 'someDynamicHeading';

  return (
    <section className="grid h-full gap-5 md:grid-cols-23 md:grid-rows-18">
      <DashItem
        heading="Access Code"
        styling="col-start-1 col-end-8 row-span-5"
      />

      <DashItem heading="Capacity" styling="col-span-7 row-span-5" />

      <DashItem
        heading="Rooms"
        styling="col-span-full col-start-[15] row-span-full row-start-1 rounded-xl"
      />

      <DashItem
        heading="Description"
        styling="col-start-1 col-end-[15] row-start-6 row-span-5"
      />
      
      <DashItem heading="Users" styling="col-start-1 col-end-[15] row-start-[11] row-span-full" />
    </section>
  );
}

export default Space;
