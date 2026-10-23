import { createFileRoute } from "@tanstack/react-router";
import { Link } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div className="flex h-dvh w-dvw items-center justify-center">
      <div className="flex w-full max-w-130 flex-col items-center gap-8">
        <h1 className="text-3xl font-semibold">Learn Motion.js</h1>
        <div className="flex flex-wrap justify-between gap-2">
          <Link
            to="/list/animations"

            className="cursor-pointer bg-gray-400 px-3 py-1.5"
          >
            Animations
          </Link>
          <Link
            to="/list/profile-pixel"

            className="cursor-pointer bg-gray-400 px-3 py-1.5"
          >
            Profile Pixel
          </Link>
        </div>
      </div>
    </div>
  );
}
