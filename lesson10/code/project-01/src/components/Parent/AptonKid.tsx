import { memo, useEffect } from "react";

interface Props {
  toy: { title: string };
  paint: () => void;
}

export default memo(function AptonKid(props: Props) {
  const { paint } = props;
  useEffect(() => {
    paint();
  }, [paint]);
  return (
    <div className="border bg-blue-300 m-4 h-6">
      AptonKid Toy{props.toy.title}
    </div>
  );
});
