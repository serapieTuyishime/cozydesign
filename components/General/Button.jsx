export default function Button({ text = "see how we work & what we can do" }) {
    return (
        <button className="flex items-center justify-center py-5 text-lg font-bold leading-none tracking-wide uppercase px-14 noise bg-secondary font-geomanist sm:text text-light rounded-xl sm:text-xl sm:py-7 max-w-max">
            {text}
        </button>
    );
}
