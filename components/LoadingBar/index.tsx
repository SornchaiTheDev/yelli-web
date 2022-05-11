import { useNProgress } from "@tanem/react-nprogress";
import Bar from "./Bar";
import Container from "./Container";

interface LoadingProps {
  isStart: boolean;
}

function Index({ isStart }: LoadingProps) {
  const { animationDuration, progress, isFinished } = useNProgress({
    isAnimating: isStart,
  });
  return (
    <Container animationDuration={animationDuration} isFinished={isFinished}>
      <Bar animationDuration={animationDuration} progress={progress} />
    </Container>
  );
}

export default Index;
