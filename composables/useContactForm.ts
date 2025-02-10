export function useContactForm() {
  const name = ref("")
  const email = ref("")
  const message = ref("")
  const isSubmitting = ref(false)

  const sendInquiry = async () => {
    if (!name.value || !email.value || !message.value) {
      alert("全ての項目を入力してください")
      return
    }

    isSubmitting.value = true

    try {
      // 送信処理（仮: APIエンドポイントをPOSTする）
      await new Promise(resolve => setTimeout(resolve, 2000)) // ダミーの遅延
      alert("お問い合わせが送信されました！")
      
      // フォームをリセット
      name.value = ""
      email.value = ""
      message.value = ""
    } catch (error) {
      console.error("送信エラー:", error)
      alert("送信に失敗しました")
    } finally {
      isSubmitting.value = false
    }
  }

  return { name, email, message, sendInquiry, isSubmitting }
}
