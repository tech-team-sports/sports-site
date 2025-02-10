<script setup>
import { useContactForm } from '../composables/useContactForm'

const { name, email, message, sendInquiry, isSubmitting } = useContactForm()
</script>

<template>
  <form @submit.prevent="sendInquiry" class="contact-form">
    <div class="form-group">
      <label for="name" class="form-label">名前:</label>
      <input 
        id="name" 
        v-model="name" 
        type="text" 
        class="form-input" 
        placeholder="あなたの名前" 
        required 
      />
    </div>

    <div class="form-group">
      <label for="email" class="form-label">メール:</label>
      <input 
        id="email" 
        v-model="email" 
        type="email" 
        class="form-input" 
        placeholder="example@example.com" 
        required 
      />
    </div>

    <div class="form-group">
      <label for="message" class="form-label">メッセージ:</label>
      <textarea 
        id="message" 
        v-model="message" 
        class="form-textarea" 
        placeholder="あなたのメッセージ..." 
        required
      ></textarea>
    </div>

    <div class="form-group">
      <button 
        :disabled="isSubmitting" 
        type="submit" 
        class="form-button"
      >
        {{ isSubmitting ? '送信中...' : '送信' }}
      </button>
    </div>
  </form>
</template>

<style scoped>
.contact-form {
  max-width: 600px;
  margin: 0 auto;
  padding: 2.5rem;
  background: linear-gradient(135deg, #00c6ff, #0072ff);
  border-radius: 15px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  color: white;
  transition: background 0.5s ease-in-out;
}

.contact-form:hover {
  background: linear-gradient(135deg, #0072ff, #00c6ff);
}

.form-group {
  margin-bottom: 1.8rem;
}

.form-label {
  display: block;
  font-size: 1.1rem;
  font-weight: 500;
  margin-bottom: 0.6rem;
  color: #f1f1f1;
}

.form-input,
.form-textarea {
  width: 100%;
  padding: 1rem;
  border-radius: 12px;
  border: 2px solid #fff;
  background: rgba(255, 255, 255, 0.1);
  color: #fff;
  font-size: 1rem;
  transition: all 0.3s ease-in-out;
}

/* プレースホルダーの色を改善 */
.form-input::placeholder,
.form-textarea::placeholder {
  color: rgba(255, 255, 255, 0.6); /* ヒント文を明るく */
  font-weight: 400; /* ヒント文を少し細く */
}

/* 入力フィールドにフォーカスした際のプレースホルダーの色変更 */
.form-input:focus::placeholder,
.form-textarea:focus::placeholder {
  color: rgba(255, 255, 255, 0.9); /* フォーカス時にプレースホルダーを明るく */
}

.form-input:focus,
.form-textarea:focus {
  outline: none;
  border-color: #ff6b6b;
  box-shadow: 0 0 8px rgba(255, 107, 107, 0.5);
}

.form-textarea {
  height: 150px;
}

.form-button {
  width: 100%;
  padding: 1.2rem;
  font-size: 1.2rem;
  background: #ff6b6b;
  color: white;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: transform 0.3s ease, background-color 0.3s ease;
}

.form-button:hover {
  background-color: #ff3b3b;
  transform: scale(1.05);
}

.form-button:disabled {
  background: #bbb;
  cursor: not-allowed;
  transform: none;
}
</style>
