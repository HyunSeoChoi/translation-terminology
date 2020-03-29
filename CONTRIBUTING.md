# 기여하기

본 프로젝트에 기여하는 방법은 다음과 같습니다.

- [번역 용어 추가 및 수정 요청](#add)
- [사이트에 대한 불편 및 개선사항을 이슈로 등록](#issue)
- [사이트 품질/가독성 개선을 위한 코드 참여 및 이슈 해결](#fix)

### <a name="add"></a>번역 용어 추가 및 수정 요청

1. **src/Languages/en2kr.json**을 직접 수정하지 않고 **src/Languages/new_en2kr.json** 리스트에 용어를 추가합니다.

2. JSON 형식에 관한 내용은 [아래](#json)에서 다룹니다.

3. Pull Request를 생성할 때 제목은 "Add en2kr word(s)"로 합니다.

### <a name="issue"></a>사이트에 대한 불편 및 개선사항을 이슈로 등록

개선사항을 자유 형식으로 이슈에 등록합니다.

### <a name="fix"></a>사이트 품질/가독성 개선을 위한 코드 참여 및 이슈 해결

개선사항을 자유 형식으로 이슈에 등록하고 **src** 코드를 수정하는 경우 Pull Request를 생성하기 전 이슈를 남깁니다.

## <a name="json"></a> JSON 포멧

```javascript
{
  "terms": [
    {
      "id": 1,
      "original_word": "pipeline",
      "translated_word": "파이프라인",
      "usage": [""]
    },
    {
      "id": 2,
      "original_word": "stopword",
      "translated_word": "불용어",
      "usage": [""]
    },
    ... 추가
}
```

### 각 key 값 의미

- **id** - 고유한 key 값
- **original_word** - 오리지널 영어 단어
- **translated_word** - **original_word**를 번역한 단어
- **usage** - 현재는 사용하지 않고 [""]로 비워둡니다.

---

**많은 참여 부탁드리며, 문의사항은 <dev.hyunseo@gmail.com>로 보내주시면 감사하겠습니다.**
