import React from  'react'

export const map = () => {
  return (
    <div className="bg-white  rounded-xl shadow-lg overflow-hidden">
    <div className="h-96 w-full">
        <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d149194.53121560547!2d80.05609980873544!3d7.584492318025548!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae32fdd3df314ed%3A0x5ce98b5543226e09!2sSusara%20Electronics!5e1!3m2!1sen!2slk!4v1761709692181!5m2!1sen!2slk"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Company Location Map"
        ></iframe>
    </div>
</div>
  )
}

export default map;
