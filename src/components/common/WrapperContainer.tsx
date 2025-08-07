import type { ReactNode, FC } from "react";

interface WrapperContainerProps {
    children: ReactNode;
}

const WrapperContainer: FC<WrapperContainerProps> = ({ children }) => (
    <div className="w-[95%] m-auto">{children}</div>
);

export default WrapperContainer;