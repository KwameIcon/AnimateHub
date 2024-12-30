
// component interface
interface ProfilePicProps{
    src: string;
    alt?: string;
    className?: string;
}


const ProfilePic = ({ src, alt, className }: ProfilePicProps) => {

    return (
        <div className="w-[57px] h-[57px] rounded-full border-2 border-gray-200 border-opacity-25 relative overflow-hidden flex items-center justify-center">
            <img src={src} alt={alt} className={`rounded-full ${className}`} />
        </div>
    )
};

export default ProfilePic;