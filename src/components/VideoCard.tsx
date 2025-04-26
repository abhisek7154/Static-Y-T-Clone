export default function VideoCard(props: any) {
  return (
    <div className="pl-3 cursor-pointer">
      <img
        className="rounded-xl"
        src={props.image}
      />

      <div className="grid grid-cols-12 pt-2">
      <div className="col-span-1">
      <img
          className={"rounded-full h-12 w-12"}
          src={props.thumbImage}
        />
      </div>
        <div className="col-span-11 pl-2">
          <div className="text-white font-semibold text-base">
            {props.title}
          </div>

          <div className="col-span-11 text-gray-400 text-base ">
            {props.auther}
          </div>

          <div className="text-gray-400 col-span-11 text-base">
            {props.views} • {props.timestamp}
          </div>
        </div>
      </div>
    </div>
  );
}
