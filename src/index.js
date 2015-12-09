export default function({ types: t }) {
  return {
    visitor: {
      StringLiteral(path) {
        if (path.node.value === "No.") {
          path.node.value = "At this time we strongly feel that doing this isn’t in the best interest of the project.";
        }
      }
    }
  };
}
