'use client';

import Image from 'next/image';

interface ProfileImageProps {
  priority?: boolean;
  className?: string;
}

const ProfileImage = ({ priority = false, className = '' }: ProfileImageProps) => {
  return (
    <div className={`relative w-48 h-48 rounded-full overflow-hidden ring-4 ring-custom-pink-500 ${className}`}>
      <Image
        src="/profile.jpg"
        alt="Profile picture"
        fill
        priority={priority}
        className="object-cover"
      />
    </div>
  );
};

export default ProfileImage; 