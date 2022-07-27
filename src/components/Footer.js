import React from 'react';

 function Footer() {
  return (
    <div id="footer">
      <div className="about-us">
      <em><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut<br></br> 
      labore et dolore magna aliqua. Ut enim ad minim veniam, <br></br>
      quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
      </p></em>
      </div>
      <div className="support">
      <h3>We love to here from you! Contact us</h3>
      <form id="contact-us">
      <label for="fname">First Name</label>
    <input type="text" id="fname" name="firstname" placeholder="Your name.."/>

    <label for="lname">Last Name</label>
    <input type="text" id="lname" name="lastname" placeholder="Your last name.."/>

    <label for="country">Country</label>
    <select id="country" name="country">
      <option value="australia">Kenya</option>
      <option value="canada">Uganda</option>
      <option value="usa">Tanzania</option>
    </select>

    <label for="subject">Subject</label>
    <textarea id="subject" name="subject" placeholder="Write something.."></textarea>

    <input type="submit" value="Submit"/>

      </form>
      </div> 
    </div>
  );
}


export default Footer;