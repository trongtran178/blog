<template>
  <v-container class="px-7">
    <v-row></v-row>
    <v-row justify="center">
      <div class="headline font-weight-bold">Java Virtual Machine (JVM) & its Architecture</div>
    </v-row>

    <div class="title font-weight-bold">JVM là gì ?</div>
    <div
      class="body-1 my-3"
    >Java virtual machine làm việc như một run-time engine để chạy các ứng dụng Java. Nó convert Java bytecode thành ngôn ngữ máy. JVM là một phần của Java Runtime Environment. Trong các ngôn ngữ lập trình khác, trình biên dịch tạo ra mã máy cho một hệ thống cụ thể (particular system), tuy nhiên, trình biên dịch Java tạo ra code cho máy ảo (Virtual Machine - gọi là Java Virtual Machine).</div>
    <v-col cols="12" class="d-flex justify-center mt-n3">
      <v-img
        max-height="500"
        src="https://codelearnstorage.s3.amazonaws.com/CodeCamp/CodeCamp/Upload/Course/7fa08323edda42e98e1aeabcfd9f1ea6.jpg"
      ></v-img>
    </v-col>
    <div class="title font-weight-bold my-2">JVM hoạt động như thế nào?</div>
    <div
      class="body-1 my-3"
    >Đầu tiên, code Java được biên dịch thành bytecode. Bytecode này được thông dịch trên các machine khác nhau.</div>
    <div class="body-1 my-3">Giữa host system (?) và Java source, byte code là ngôn ngữ trung gian.</div>
    <div class="body-1 my-3">JVM chịu trách nhiệm phân bổ không gian bộ nhớ.</div>

    <v-col cols="12" class="d-flex justify-center mt-n3">
      <v-img
        max-height="500"
        src="https://www.guru99.com/images/java/052016_0614_WorkingofJa10.jpg"
      ></v-img>
    </v-col>

    <div class="title font-weight-bold my-2">Kiến trúc JVM</div>

    <div
      class="body-1 my-3"
    >Hiểu về kiến trúc của JVM. Nó chứa classloader, memory area, execution engine, ...</div>
    <v-col cols="12" class="d-flex justify-center">
      <v-img src="https://www.guru99.com/images/1/2.png"></v-img>
    </v-col>

    <div class="body-1 my-3 font-weiht-medium">1) ClassLoader</div>
    <div
      class="body-1 my-3"
    >Class loader (Trình nạp lớp) là một subsystem (hệ thống con) được sử dụng để load các file class. Nó thực hiện 3 chức năng chính: Loading, Linking và Initialization.</div>
    <div class="body-1 my-3 font-weiht-medium">2) Method Area</div>
    <div
      class="body-1 my-3"
    >JVM Method Area lưu trữ các class structure như metadata, constant runtime pool, method local data, method code, … được sử dụng trong class và khởi tạo các object/interface.</div>
    <div class="body-1 my-3 font-weiht-medium">3) Heap</div>
    <div
      class="body-1 my-3"
    >Tất cả các Objects, các biến thực thể (related instance variables), và các array được chứa trong Heap. Bộ nhớ Heap is common và được chia sẻ thông qua nhiều thread (shared across multiple threads).</div>
    <div class="body-1 my-3 font-weiht-medium">4) JVM Language Stacks</div>
    <div
      class="body-1 my-3"
    >Chứa các biến cục bộ (local variables). Mỗi thread có JVM Stack riêng, được tạo đồng thời khi thread được tạo. Một frame mới được tạo bất cứ khi nào một phương thức được gọi, và nó được bỏ đi khi tiến trình gọi phương thức (method invocation process) được hoàn tất.</div>
    <div class="body-1 my-3 font-weiht-medium">5) PC Register</div>
    <div
      class="body-1 my-3"
    >Chứa địa chỉ (address) của Java Virtual Machine Instruction đang được thực thi. Trong Java, mỗi thread có một PC register riêng.</div>
    <div class="body-1 my-3 font-weiht-medium">6) Native Method Stacks</div>
    <div
      class="body-1 my-3"
    >Tổ chức các native code phụ thuộc vào native library. Nó được viết bằng ngôn ngữ khác thay vì Java.</div>
    <div class="body-1 my-3 font-weiht-medium">7) Execution Engine</div>
    <div
      class="body-1 my-3"
    >Là một type of software dùng để kiểm tra phần cứng, phần mềm hoặc hệ thống hoàn chỉnh. Nó execute các .class(bytecode). Nó đọc bytecode từng dòng (line by line).Có thể được phân loại thành 3 phần:</div>
    <div
      class="pl-3 py-1"
    >a. Interpreter: Thông dịch bytecode từng dòng và sau đó thực thi (execute). Điểm bất lợi ở đây là khi một phương thức được gọi nhiều lần là mỗi lần cần phải thông dịch (when one method is called multiple times, every time interpretation is required).</div>
    <div
      class="pl-3 py-1"
    >b. Just-In-Time Compiler: Được dùng để tăng hiệu suất của Interpreter. Nó bien dịch toàn bộ bytecode và thay đổi nó thành native code để bất cứ khi nào trình thông dịch “thấy” các repeat method call, JIT cung cấp trực tiếp native code cho phần đó (repeat method call - ?) để không cần phải thông dịch lại, do đó hiệu suất được cải thiện.</div>
    <div class="pl-3 py-1">c. Garbage Collector: Nó destroy các object không được reference.</div>

    <div class="body-1 my-3 font-weiht-medium">8) Native Method Interface</div>
    <div
      class="body-1 my-3"
    >Là một interface tương tác với các Native method Library và cung cấp các native library (C, C++) cần thiết cho sự thực thi (required for the execution).</div>
    <div class="body-1 my-3 font-weiht-medium">9) Native Method Libraries</div>
    <div class="body-1 my-3">Collections of Native Libraries được yêu cầu bởi Execution Engine</div>

    <div class="title font-weight-bold my-2">Software Code Compilation & Execution process</div>
    <div class="body-1 my-3">Để viết và thực thi chương trình phần mềm, ta cần có những điều sau:</div>
    <div class="pl-3 py-1">
      <span class="font-weight-medium">1. Editor</span> – Tất nhiên rồi. Để nhập chương trình, có thể sử dụng notepad.
    </div>
    <div class="pl-3 py-1">
      2.
      <span class="font-weight-medium">Compiler</span> – Để convert ngôn ngữ cấp cao thành native machine code (?)
    </div>
    <div class="pl-3 py-1">
      3.
      <span class="font-weight-medium">Linker</span> - Kết hợp các program file khác nhau được tham chiếu trong main program – cùng nhau.
    </div>
    <div class="pl-3 py-1">
      4.
      <span class="font-weight-medium">Loader</span> - Nạp các file từ thiết bị lưu trữ như Hark Disk, Flash Drive, CD vào RAM để thực thị. Việc nạp được thực hiện tự động khi bạn thực thi code.
    </div>
    <div class="pl-3 py-1">
      5.
      <span class="font-weight-medium">Execution</span> - Thực thi code được xử lý bởi OS và bộ xử lý của bạn.
    </div>

    <div class="title font-weight-bold my-2">C code Compilation and Execution process</div>
    <div class="body-1 my-3">
      Giả sử trong main method, bạn gọi 2 function f1 và f2. Main method nằm trong file
      <span
        class="red--text font-weight-bold"
      >a1.c</span>
    </div>
    <v-col cols="12" class="d-flex justify-center mt-n3">
      <v-img
        max-height="500"
        max-width="500"
        src="https://www.guru99.com/images/java/052016_0614_WorkingofJa1.jpg"
      ></v-img>
    </v-col>
    <div class="body-1 my-3">
      Function 1 nằm trong file a2.c
      <span class="red--text font-weight-bold">a1.c</span>
    </div>
    <v-col class="d-flex justify-center">
      <v-img
        max-height="500"
        max-width="300"
        src="https://www.guru99.com/images/java/052016_0614_WorkingofJa2.jpg"
      ></v-img>
    </v-col>
    <div class="body-1 my-3">
      Function 2 nằm trong a3.c
      <span class="red--text font-weight-bold">a1.c</span>
    </div>
    <v-col class="d-flex justify-center">
      <v-img
        max-height="500"
        max-width="300"
        src="https://www.guru99.com/images/java/052016_0614_WorkingofJa3.jpg"
      ></v-img>
    </v-col>
    <div
      class="body-1 my-3"
    >Tất cả các file, a1.c, a2.c và a3.c được “đưa” đến trình biên dịch. Đầu ra là các object file tương ứng với machine code (mã máy).</div>
    <v-col class="d-flex justify-center">
      <v-img
        max-height="500"
        max-width="400"
        src="https://www.guru99.com/images/java/052016_0614_WorkingofJa4.jpg"
      ></v-img>
    </v-col>
    <div
      class="body-1 my-3"
    >Bước tiếp theo là tích hợp tất cả file .object này vào một file .exe duy nhất với sự trợ giúp của linker. Linker sẽ kết hợp tất cả các tệp này với nhau và tạo têp .exe</div>
    <v-col class="d-flex justify-center">
      <v-img
        max-height="500"
        max-width="400"
        src="https://www.guru99.com/images/java/052016_0614_WorkingofJa5.jpg"
      ></v-img>
    </v-col>

    <div
      class="body-1 my-3"
    >Trong quá trình chạy chương trình, một chương trình nạp (loader program) sẽ load file .exe vào RAM để thực thi.</div>
    <v-col class="d-flex justify-center">
      <v-img
        max-height="500"
        max-width="400"
        src="https://www.guru99.com/images/java/052016_0614_WorkingofJa6.jpg"
      ></v-img>
    </v-col>

    <div class="title font-weight-bold my-2">Java code Compilation and Execution in Java VM</div>
    <div class="body-1 my-3">Trong method main, bạn có 2 function f1, f2.</div>
    <div class="pl-3 py-1">• Main method trong file a1.java</div>
    <div class="pl-3 py-1">• f1 nằm trong file a2.java</div>
    <div class="pl-3 py-1">• f2 nằm trong file a3.java</div>

    <v-col class="d-flex justify-center">
      <v-img
        max-height="500"
        max-width="400"
        src="https://www.guru99.com/images/java/052016_0614_WorkingofJa7.jpg"
      ></v-img>
    </v-col>

    <div
      class="body-1 my-3"
    >Trình biên dịch sẽ biên dịch 3 file và sinh ra 3 file .class tương ứng chứa byte code. Không giống C, không có linking đươc thực hiện.</div>
    <div
      class="body-1 my-3"
    >Máy ảo Java (JVM) nằm trên RAM. Trong quá trình thực thi, sử dụng Class Loader, các file .class được đưa vào RAM. BYTE code được verified cho bất kỳ phạm vi bảo mật.</div>
    <v-col class="d-flex justify-center">
      <v-img
        max-height="500"
        max-width="400"
        src="https://www.guru99.com/images/java/052016_0614_WorkingofJa4.jpg"
      ></v-img>
    </v-col>
    <div
      class="body-1 my-3"
    >Tiếp theo, Execution Engine sẽ convert Bytecode thành native machine code. Đây là Just in time compiling. Nó là một trong các lý do chính tại sao Java tương đối chậm.</div>

    <v-col class="d-flex justify-center">
      <v-img
        max-height="500"
        max-width="400"
        src="https://www.guru99.com/images/java/052016_0614_WorkingofJa9.jpg"
      ></v-img>
    </v-col>

    <div class="title font-weight-bold my-2">Tại sao JAVA là ngôn ngữ Thông dịch và Biên dịch ?</div>
    <div class="body-1 my-3">Ngôn ngữ lập trình được phân loại</div>
    <div class="pl-3 py-1">• Ngôn ngữ bậc cao (C++, Java).</div>
    <div class="pl-3 py-1">• Ngôn ngữ bậc trung (C).</div>
    <div class="pl-3 py-1">• Ngôn ngữ bậc thấp (Assembly).</div>
    <div class="pl-3 py-1">• Cuối cùng là cấp độ thấp nhất như Ngôn ngữ máy (Machine Language).</div>

    <div class="body-1 my-3">
      <span class="font-weight-bold">Trình biên dịch (Compiler)</span> là chương trình convert một chương trình từ ngôn ngữ cấp độ này sang ngôn ngữ cấp độ khác. VD chuyển đổi chương trình C++ thành machine code.
    </div>
    <div
      class="body-1 my-3"
    >Trình biên dịch Java convert ngôn ngữ cấp cao JAVA thành bytecode (cũng là một loại machine code).</div>
    <div class="body-1 my-3">
      <span class="font-weight-bold">Trình thông dịch (Interpreter)</span> là chương trình convert chương trình từ ngôn ngữ này sang ngôn ngữ khác ở
      <span
        class="font-weight-bold"
      >cùng một cấp độ.</span> Ví dụ: Convert chương trình Java thành C++.
    </div>
    <div
      class="body-1 my-3"
    >Trong Java, Just-In-Time generator convert bytecode thành native machine code (cùng cấp độ - same programming level)</div>

    <div class="body-1 my-3">Do đó, Java vừa được biên dịch, cũng vừa được thông dịch.</div>

    <div class="title font-weight-bold my-2">Tại sao JAVA chậm ?</div>

    <div class="body-1 my-3">Có 2 lý do chính đằng sau sự chậm chạp của JAVA:</div>

    <div class="pl-3 py-1">
      <span class="font-weight-medium">1. Dynamic Linking</span> – Không như C, linking được thực hiện tại run-time, mỗi lần chương trình được chạy trong Java.
    </div>
    <div class="pl-3 py-1">
      <span class="font-weight-medium">2. Run-time Interpreter</span> – Việc chuyển đổi bytecode thành native machine code được thực hiện tại run-time trong Java, điều này làm cho tốc độ chậm lại.
    </div>
    <div
      class="body-1 my-3"
    >Tuy nhiên, phiên bản mới nhất của Java đã giải quyết các vấn đề hiệu năng rất tốt.</div>
  </v-container>
</template> 

<script>
</script>