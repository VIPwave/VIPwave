'use client';

import dayjs from 'dayjs';
import utc from 'dayjs/plugin/utc';
import timezone from 'dayjs/plugin/timezone';
import { Button } from '@/components/ui/button';
import { ChevronRight } from 'lucide-react';
import { useRouter } from 'next/navigation';

dayjs.extend(utc);
dayjs.extend(timezone);
dayjs.locale('ko');

export default function NoticeList(props: { title: string }) {
  const now = dayjs().tz('Asia/Seoul');

  const today = now.format('YYYY년 MM월 DD일');

  return (
    <>
      <div className="flex py-2 border-b border-primary mt-5 mb-2">
        <span className="font-bold grow">{props.title}</span>
        <span className="text-gray-500 text-xs flex items-center">{today}</span>
      </div>

      <div>
        <Notice
          title="대성(DAESUNG) 'Universe' MV"
          url="https://www.youtube.com/watch?v=PHToFdx20ac"
        />
        <Notice
          title="대성(DAESUNG) 'Universe' MV Teaser"
          url="https://youtu.be/mGO0EyPaktQ?si=KWAoRlFt_1-PYc13"
        />
        <Notice
          title="DAESUNG D's WAVE 공동구매 진행 (기프티팬)"
          url="https://giftifan.page.link/sfSH"
        />
        <Notice
          title="DAESUNG D's WAVE 공동구매 진행 (케타포)"
          url="https://kr.ktown4u.com/eventsub?eve_no=43181027&biz_no=967"
        />
        <Notice
          title="[대성 컴백 대비] 총공 이벤트용 기부/모금"
          url="/support"
          isExtra={false}
        />
        <Notice
          title="원클릭 스트리밍 링크 바로가기"
          url="/streaming"
          isExtra={false}
        />
      </div>
    </>
  );
}

function Notice(props: { title: string; url: string; isExtra?: boolean }) {
  const { title, url, isExtra } = props;

  const router = useRouter();

  const handleClick = () => {
    if (isExtra) {
      window.open(url, '_blank', 'noopener,noreferrer');
    } else {
      router.push(url);
    }
  };

  return (
    <Button
      variant="ghost"
      className="w-full flex justify-between items-center p-0"
      onClick={handleClick}
    >
      <span className="overflow-hidden text-ellipsis whitespace-nowrap max-w-[calc(100%-24px)]">
        {title}
      </span>
      <div className="w-5 h-5 flex justify-center items-center">
        <ChevronRight className="h-5 w-5 text-gray-400" />
      </div>
    </Button>
  );
}
