import SData from "../../data.json";
import VerticalCarousol from "../../components/vertical-carousol/Vertical-Carousol";
import NavBar from "../../layouts/nav/Nav";
import Footer from "../../layouts/footer/Footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
import "./Pages.css";

export default function TNCPage() {
  const { ExperienceCarouselData } = SData;
  return (
    <div className="tnc">
      <div className="top-carousol">
        <VerticalCarousol data={ExperienceCarouselData}></VerticalCarousol>
        <div className="bounceY">
          <FontAwesomeIcon icon={faAngleDown} />
        </div>
      </div>
      <NavBar></NavBar>
      <section className="mb-50">
        <div className="exp-info-title">
          <span>TERMS AND CONDITIONS</span>
          <hr></hr>
        </div>
        <div className="content para-container">
          Please take a moment to review our Terms & Conditions and Cancellation
          Policy below. Note that due to our small size we have to strictly
          adhere to the policies listed below and there can be no exceptions,
          even in the case of an emergency. <br />
          <ol>
            <li>
              {" "}
              Definition
              <ul>
                <li>Any one gender shall include the other two genders; and</li>
                <li>
                  The singular shall include the plural and vice versa; and
                </li>
                <li>
                  Natural persons include created entities (corporate and
                  unincorporated) and the state and vice versa;
                </li>
                <li>Guest shall mean any person residing at the resort;</li>
                <li>
                  Signing Guest shall mean any such person who is at least 18
                  years of age, possesses the legal authority to enter into a
                  legal agreement constituted by acceptance of these Terms and
                  Conditions, on his own behalf and/or on behalf of the resident
                  guests including each and every guests in the accompanying
                  party and who accepts and/or signs this terms and conditions
                  at the time of reservation and/or at the time of check in at
                  the resort.
                </li>
                <li>
                  Invitee shall mean any person who is not residing in the
                  Resort but has been invited by a guest to the Resort.
                </li>
              </ul>
            </li>
            <li>
              Check-in time is 14:00 hrs & Check-out time is 11:00 hrs. If
              guests need access to the rooms before 14:00 hrs, it must be upon
              written approval of the Reservations team. Similarly, late
              departures beyond 11:00 hrs must be upon approval, else the extra
              stay will be chargeable.
            </li>
            <li>
              <ul>
                <li>
                  The Guest and/or Signing Guest(s) and/or the principle agree
                  to pay the resort 100% in advance, the room rate as determined
                  by the resort for the period of residence, at the time of
                  booking.
                </li>
                <li>
                  The Guest and/or Signing Guest(s) and/or the principle agree
                  to pay the resort no later than the time of departure (unless
                  prior written arrangements have been made with the resort) any
                  food, beverage, any other commodity, service charges and/or
                  any other such state or central taxes and levies payable by
                  the Guest(s) to the resort as determined by the resort.
                </li>
              </ul>
            </li>
            <li>
              The Guest and/or Signing Guest(s) will be liable for damages (not
              limited to the Cash deposit) caused to the resort and/or its
              property on account of any act, omission or negligence of the
              Guest(s). A refundable security deposit will be taken in cash upon
              arrival per room, and returned no later than the time of departure
              (barring no damage by the Guest(s)). If the damage is discovered
              after the Guest(s) have left, the resort reserves the right to
              charge the Credit Card of the Guest(s) and/or the Signing Guest(s)
              with the said damage; or to send an invoice for, the amount
              required to repair any such damage to the Guest(s) and/or the
              Signing Guest(s).
            </li>
            <li>
              The Guest(s)/Signing Guest(s) acknowledge that the room rate may
              be subject to change without prior notice.
            </li>
            <li>The resort management reserves rights of admission.</li>
            <li>
              Indemnity:
              <ul>
                <li>
                  The Guest(s)/Signing Guest(s) acknowledges on his own behalf
                  and on behalf of his accompanying party including any minors
                  who may be a part of the accompanying party, that the
                  Guest(s)/Signing Guest(s) and each and every Guest in the
                  accompanying party and/or the invitees of the Guest(s) are
                  well acquainted, fully aware of and appreciate the real
                  dangers and risks that are associated with residing at the
                  Resort considering the presence of wild and dangerous animals,
                  reptiles, birds and insects and the attendant real risk of
                  suffering bodily harm, injury, death and /or loss to property
                  which may arise as result of an encounter with and /or the
                  presence of wild animals and /or reptiles and /or birds whilst
                  on the premises or property of the Resort.
                </li>
                <li>
                  The Guest(s)/Signing Guest including guest(s) of the
                  accompanying party and/or invitees hereby waives all claim or
                  claims of whatsoever cause or nature howsoever arising and
                  hereby indemnifies and continues to indemnify and hold
                  harmless and free, the Resort/management of the Resort, their
                  owners, directors, associates, partners, directors and
                  employees and/or any person connected whether directly or
                  indirectly with the running of the Resort and fellow
                  guest/invitee from any and all claims of whatsoever cause or
                  nature by the guest(s)/signing Guest(s) and/or guest(s) in the
                  accompanying party and/or invitees and/or by the spouse,
                  common law wife, children, whether minor or adult, or
                  relatives and/or authorised representatives of the
                  Guest(s)/Signing Guest(s) and/or guest(s) in the accompanying
                  party and/or invitees, for any harm, injury, death, or loss
                  suffered by the Guest(s) / Signing Guest(s) and/or any guest
                  of the accompanying party and/or invitees while on the resort
                  and whether arising from an act or omission on the part of
                  those hereby indemnified on anyone of them.
                </li>
                <li>
                  The Guest(s)/Signing Guest(s) and guests in the accompanying
                  party and/or invitees understand that in the event of an
                  injury the Resort may at its discretion and without prejudice
                  and without admission of liability arrange and pay for
                  emergency medical treatment for and on behalf of any Guest(s)/
                  invitee and/or accompanying party the same shall not however
                  amount to admission of liability on the part of the
                  owners/directors of the Resort, their associates, servants,
                  employees and/or any person connected whether directly or
                  indirectly with the running of the Resort.
                </li>
              </ul>
            </li>
            <li>
              Cancellations: In the unfortunate event that you will not be able
              to join us, please review the cancellation policy below:
              <ul>
                <li>
                  Reservations cancelled 15 days or prior to the check-in date
                  will incur a 10% administrative fee
                </li>
                <li>
                  Reservations cancelled 8 - 14 days prior to the check-in date
                  will incur a 50% cancellation charge
                </li>
                <li>
                  No date changes or refunds will be entertained for any
                  cancellations within 7 days of the scheduled check-in date
                </li>
                <li>
                  No date changes or refunds will be entertained for any stays
                  during the Diwali (17 - 26 Oct), Christmas (19 - 25 Dec) and
                  New Years (26 Dec - 1 Jan) periods
                </li>
                <li>All valid refund requests will be processed via cheques</li>
              </ul>
            </li>
            <li>
              Jurisdiction: In the matter of enforcement of any rights or
              remedies hereunder, in pursuance of this Terms and Conditions, the
              Courts of Belgaum, Karnataka alone shall have jurisdiction.
            </li>
          </ol>
          The signing guest(s) on signing this Terms of Residence, warrants that
          he has read and understood and is duly authorized to sign and bind
          himself, his principle, as well as each and every guest in his
          accompanying party including invitees (if any), to this terms and
          conditions of residence; and failing such authority, the signing
          guest(s) agrees to be personally liable to pay for the residence of
          guest in his accompanying party including invitees (if any) and/or for
          any claim or claims of whatsoever nature that may arise against the
          owners/operators of the Resort, their associates, servants, employees
          and/or any person connected whether directly or indirectly with the
          running of the Resort and/or fellow guests/invites which might have
          arisen out of harm, injury, death, or loss suffered whilst on the
          premises or property of the Resort and whether arising from an act or
          omission on the part of the owners/operators of the Resort, their
          associates, servants, employees and/or any person connected whether
          directly or indirectly with the running of the Resort. These terms and
          conditions are required to be agreed to by the Signing Guest(s) and/or
          his/her authority at the time of booking.
        </div>
      </section>
      <Footer></Footer>
    </div>
  );
}
