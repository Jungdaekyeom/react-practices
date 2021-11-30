import React, { Fragment } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; // FontAwesomeIcon 이 컴포넌트 - example
import { faBell, faCheckCircle, faTimesCircle } from '@fortawesome/free-solid-svg-icons'; // 아이콘들을 받아옴

// additional... 꼭 필요하진 않음
import { library } from '@fortawesome/fontawesome-svg-core'; // 라이브러리 등록
import { far } from '@fortawesome/free-regular-svg-icons'; // brand
import { fab } from '@fortawesome/free-brands-svg-icons'; // brand

// https://fontawesome.com/


export default function () {
    library.add(faBell, far, fab);

    return (
        <div>
            {/* examples - 2번 line */}
            <p>제일 많이 쓰는 방법</p>
            <FontAwesomeIcon icon={faBell} />
            <FontAwesomeIcon icon={faCheckCircle} />
            <FontAwesomeIcon icon={faTimesCircle} />

            {/* solid - 5번 line 라이브러리 등록 후 사용할 수 있는 방법 */}
            <p>라이브러리 등록 방법</p>
            <FontAwesomeIcon icon={["fas", "bell"]} />
            <FontAwesomeIcon icon={"bell"} />

            {/* regular */}
            <p>regular</p>
            <FontAwesomeIcon icon={["far", "bell"]} />

            {/* brand */}
            <p>brand</p>
            <FontAwesomeIcon icon={["fab", "github"]} />
            <FontAwesomeIcon icon={["fab", "apple"]} />
            <FontAwesomeIcon icon={["fab", "google"]} />
        </div>
    )
}