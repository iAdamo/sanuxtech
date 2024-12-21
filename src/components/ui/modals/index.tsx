interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const Modal: React.FC<ModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex justify-center items-center px-4 z-10">
      <div className="bg-[#f9f9f9] p-6 rounded-lg shadow-lg w-full max-w-2xl flex flex-col md:flex-row items-start gap-6">
        {/* Left Section: Badge */}
        <div className="flex-shrink-0 flex justify-center md:justify-start items-center">
          <div
            className="badge-base LI-profile-badge"
            data-locale="en_US"
            data-size="medium"
            data-theme="dark"
            data-type="HORIZONTAL"
            data-vanity="adamsanusi"
            data-version="v1"
          >
            <a
              className="badge-base__link LI-simple-link font-bold text-blue-500"
              href="https://ng.linkedin.com/in/adamsanusi?trk=profile-badge"
            >
              Click here to view my LinkedIn profile
            </a>
          </div>
          <script
            src="https://platform.linkedin.com/badges/js/profile.js"
            async
            defer
            type="text/javascript"
          ></script>
        </div>
        {/* Right Section: Content */}
        <div className="flex-grow md:w-2/3">
          <h2 className="text-2xl font-bold mb-4 text-center md:text-left">
            Maintenance Notice
          </h2>
          <p className="text-base mb-4 text-center md:text-left">
            Our site is currently under maintenance. We apologize for any
            inconvenience caused. Please check back later.
          </p>
          <div className="flex justify-center md:justify-end">
            <button
              onClick={onClose}
              className="bg-primary-500 text-white py-2 px-4 rounded-lg w-full md:w-auto"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};