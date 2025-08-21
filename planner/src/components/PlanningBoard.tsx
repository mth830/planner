import React, { useState } from "react";
interface User {
  name: string;
  x?: number;
  y?: number;
  id: number;
}
interface EventItem {
  availableUsers: [];
  title: string;
  locations: [];
  deployedUsers: User[];
}
const defaultEventItem: EventItem = {
  availableUsers: [],
  title: "Tuesday Night Performances",
  locations: [],
  deployedUsers: [
    { name: "Bob", x: 1, y: 1, id: 1 },
    { name: "Sally", x: 100, y: 100, id: 2 },
    { name: "Ronald", x: 150, y: 50, id: 3 },
  ],
};
export const PlanningBoard = () => {
  const [eventItem, setEventItem] = useState<EventItem>(defaultEventItem);
  const updateUserPosition = (x: number, y: number, userId: number) => {
    const isDeployed = eventItem.deployedUsers.some(
      (user) => user.id === userId
    );
    //if(!isDeployed){;} move this to move people from available to deployed if they are not deployed
    //check to see if the coordinates left out of the bounding box of the container
    const { deployedUsers } = eventItem;
    const deployedUsersClone: User[] = JSON.parse(
      JSON.stringify(deployedUsers)
    );
    const selectedUser = deployedUsersClone.find((user) => user.id === userId);
    if (!selectedUser) {
      console.warn("User not found with selected ID");
      return;
    }
    selectedUser.x = x - 500; //this is another part of the issue
    selectedUser.y = y - 500; //this is part of the issue
    setEventItem({ ...eventItem, deployedUsers: [...deployedUsersClone] });
  };
  const handleDrag = (event: React.DragEvent) => {
    const { screenX, screenY } = event;
    const id = event.target.id;

    updateUserPosition(screenX, screenY, +id);
  };
  return (
    <>
      <div title={a.toString()}>{eventItem.title}</div>
      <div style={{ position: "absolute" }}>
        {eventItem.deployedUsers.map(({ name, x, y, id }, i) => (
          <div
            key={id + i}
            draggable={true}
            onDragEnd={handleDrag}
            id={id.toString()}
            style={{
              left: x,
              top: y,
              position: "absolute",
              borderWidth: "5px",
              borderStyle: "solid",
              cursor: "grab",
            }}
          >
            {name}
          </div>
        ))}
      </div>
    </>
  );
};
