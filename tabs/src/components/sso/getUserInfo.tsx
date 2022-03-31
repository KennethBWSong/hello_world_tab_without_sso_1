import { useData } from "@microsoft/teamsfx-react";
import { useContext } from "react";
import { TeamsFxContext } from "./Context";

export function GetUserInfo(props: {}) {
  const { teamsfx } = useContext(TeamsFxContext);
  const { loading, data, error } = useData(async () => {
    if (teamsfx) {
      const userInfo = await teamsfx.getUserInfo();
      return userInfo;
    }
  });
  const userName = (loading || error) ? "": data!.displayName;

  return (
    <div>
      <h2>Add Single Sign On feature to retrieve user profile</h2>
      {
        userName && (
          <div>Hello {userName}</div>
        )
      }
    </div>
  )
}