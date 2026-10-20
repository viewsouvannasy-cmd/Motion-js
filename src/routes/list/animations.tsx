import { createFileRoute } from "@tanstack/react-router";
import { Overview } from "../../components/animations/Overview";

export const Route = createFileRoute("/list/animations")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div>
      <Overview />
    </div>
  );
}
