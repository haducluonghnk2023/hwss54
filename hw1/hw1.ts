function calculateBMI(weight: number, height: number): number {
    // Kiểm tra các điều kiện hợp lệ
    if (typeof weight !== 'number' || typeof height !== 'number') {
      throw new Error('Cân nặng và chiều cao phải là số');
    }
  
    if (weight <= 0 || height <= 0) {
      throw new Error('Cân nặng và chiều cao phải lớn hơn 0');
    }
  
    // Tính chỉ số BMI
    const bmi = weight / (height * height);
    return bmi;
  }
  
  try {
    const bmi = calculateBMI(70, 1.75);
    console.log(bmi); 
  } catch (error) {
    if (error instanceof Error) {
      console.error(error.message);
    } else {
      console.error('Đã xảy ra lỗi không xác định');
    }
  }
  
  try {
    const bmi = calculateBMI(-70, 1.75);
    console.log(bmi); // Không in ra gì vì sẽ gặp lỗi
  } catch (error) {
    if (error instanceof Error) {
      console.error(error.message); // Output: Cân nặng và chiều cao phải lớn hơn 0
    } else {
      console.error('Đã xảy ra lỗi không xác định');
    }
  }
  
  try {
    const bmi = calculateBMI(Number('70'), 1.75);
    console.log(bmi); // Output: 22.857142857142858
  } catch (error) {
    if (error instanceof Error) {
      console.error(error.message);
    } else {
      console.error('Đã xảy ra lỗi không xác định');
    }
  }