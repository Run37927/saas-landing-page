import { cn } from "@/lib/utils";

const MaxWidthWrapper = ({ className, children }) => {
    return (
        <div className={cn('mx-auto w-full max-w-screen-xl px-10', className)}>
            {children}
        </div>
    )
}

export default MaxWidthWrapper;