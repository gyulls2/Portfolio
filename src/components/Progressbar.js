import { Progress } from "antd";
import React, {
  useState,
  useCallback,
  useEffect,
  useRef,
  MouseEvent,
} from "react";

const Progressbar = () => {
  const [width, setWidth] = useState(0);
  const progressRef = useRef(null);

  const handleScroll = useCallback(() => {
    const { scrollTop, scrollHeight, clientHeight } = document.documentElement;

    if (scrollTop === 0) {
      // 스크롤바가 가장 위에있을때는 0으로 처리
      setWidth(0);
      return;
    }

    const windowHeight = scrollHeight - clientHeight;
    // 스크롤바 크기 = (내용 전체의 높이) - (스크롤바를 제외한 클라이언트 높이)

    const currentPercent = scrollTop / windowHeight;
    // 스크롤바 크기 기준으로 scrollTop이 내려온만큼에 따라 계산 (계산시 소수점 둘째자리까지 반환)

    setWidth(currentPercent * 100);
    // 소수점 둘째자리 까지이므로, 100을 곱하여 정수로 만들어줍니다.
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, true);

    return () => {
      window.removeEventListener("scroll", handleScroll, true);
    };
  }, [handleScroll]);

  return (
    <div className="progressbar">
      <Progress
        strokeLinecap="butt"
        percent={width}
        showInfo={false}
        strokeWidth={4}
        trailColor="#fff"
        strokeColor="#407bff"
        success={{ strokeColor: "#407bff" }}
      />
    </div>
  );
};

export default Progressbar;
