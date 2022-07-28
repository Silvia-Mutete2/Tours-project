import React from "react";

function Comments() {
  return (
    <div>
      <h1>Comments</h1>
      <form>
        <div>
          <textarea  rows="4" cols="50" type="text" name="comment" placeholder="Enter text here...." />
        </div>
        <br/>
        <div>
          <input type="submit" value="Send Comment" />
        </div>
      </form>
    </div>
  );
}
export default Comments