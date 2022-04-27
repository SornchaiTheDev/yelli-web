import { ChangeEvent } from "react";
import { useRouter } from "next/router";

function Header() {
  const router = useRouter();
  const { locale } = router;

  const handleLocaleChange = (event: ChangeEvent<HTMLSelectElement>) => {
    const lang = event.target.value;
    router.replace(router.asPath, router.asPath, { locale: lang });
  };
  return (
    <div className="w-full p-2 flex justify-start items-center relative">
      <h1 className="text-2xl md:text-3xl text-center text-gray-900 flex-1">
        Yelli
      </h1>
      <select
        className="absolute right-2 appearance-none rounded-lg p-1 w-fit text-center bg-gray-200"
        onChange={handleLocaleChange}
        value={locale}
      >
        <option value="th">ภาษาไทย</option>
        <option value="en">EN</option>
        <option value="cn">中國人</option>
        <option value="jp">日本</option>
      </select>
    </div>
  );
}

export default Header;
