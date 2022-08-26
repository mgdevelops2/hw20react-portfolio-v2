import React from "react";

import "./Contact.scss";

export default function ContactForm() {
  return (
    <div className="contact-container">
      <div className="contact-title">contact Me</div>
      <div className="contact-description">
        I don't know who you are, but if you are building something cool and
        look to deliver results, reach out! I like to impact the bottom line,
        play nice and help others along the way.
      </div>
      <div className="contact-block">
        {/* <div className="block-1">
          <div className="map">
            <iframe
              title="iframe"
              frameborder="0"
              scrolling="yes"
              marginheight="0"
              marginwidth="0"
              src="https://maps.google.co.uk/maps?f=q&amp;source=s_q&amp;hl=en&amp;geocode=&amp;q=glasgow&amp;aq=&amp;sll=55.988706,-4.578927&amp;sspn=0.038696,0.132093&amp;ie=UTF8&amp;hq=&amp;hnear=Glasgow,+Glasgow+City,+United+Kingdom&amp;t=m&amp;ll=55.864331,-4.251709&amp;spn=0.048164,0.135612&amp;z=12&amp;iwloc=A&amp;output=embed"
            ></iframe>
          </div>
        </div> */}
        <div className="block-2">
          <form action="#">
            <div className="form-col">
              <div className="form-group">
                <label htmlFor="name">Your Name</label>
                <input type="text" id="name" />
              </div>
              <div className="form-group">
                <label htmlFor="email">Your Email</label>
                <input type="email" id="email" />
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="subject">Subject</label>
              <input type="text" id="subject" />
            </div>
            <div className="form-group">
              <label htmlFor="Message">Message</label>
              <textarea name="message" id="message"></textarea>
            </div>
            <div className="btn-container">
              <a href="mailto:abc@example.com?subject = Feedback&body = Message">
                Send Feedback
              </a>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
