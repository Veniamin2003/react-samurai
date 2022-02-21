import React from "react";

const Profile = () => {
  return (
    <div className="content">
      <div>
        <img
          src="https://avatars.mds.yandex.net/get-zen_doc/3048507/pub_5eb02ef6dadc5a18844cd5fa_5eb02f8f6c15632218123633/scale_1200"
          class="header-content-img"
        ></img>
      </div>
      <div>
        <img
          src="https://alexanderjoo.com/wp-content/uploads/2016/02/team5.png"
          class="avatar-content"
        ></img>
      </div>

      <div>
        My posts
        <div>New posts</div>
        <div>
          <div> post 1 </div>
          <div> post 2 </div>
          <div> post 3 </div>
          <div> post 4 </div>
        </div>
      </div>
    </div>
  )
}

export default Profile;
