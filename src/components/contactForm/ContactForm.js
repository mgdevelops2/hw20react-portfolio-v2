import React from "react";

import "./Contact.scss";

export default function App() {
  return (
    <div className="contact-container">
      <div className="contact-title">Contact</div>
      <div className="contact-description">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque ullam
        quasi eos ea inventore. Sit!
      </div>
      <div className="contact-block">
        <div className="block-1">
          <div className="address">
            <i className="fas fa-map-marker-alt"></i>
            <div className="address-details">
              <p>Location</p>
              <p>B22 Bakers Street, Glasgow, Scotland</p>
            </div>
          </div>
          <div className="email">
            <i className="fas fa-envelope"></i>
            <div className="email-details">
              <p>Email</p>
              <p>info@example.com</p>
            </div>
          </div>
          <div className="phone">
            <i className="fas fa-phone-alt"></i>
            <div className="phone-details">
              <p>Call</p>
              <p>+1 2222 2222 22</p>
            </div>
          </div>

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
        </div>
        <div className="block-2">
          <form action="#">
            <div className="form-row">
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
              <button type="submit">Send Message</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
