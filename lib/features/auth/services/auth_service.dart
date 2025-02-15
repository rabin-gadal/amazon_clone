import 'package:amazon_clone/models/user.dart';

class AuthService {

  // sign up user
  void signUpUser({
    required String email,
    required String password,
    required String name,
  
  }) async {
    try {
      User user = User(
        id: '',
        name: name,
        password: password,
        address: email,
        type: 'user',
        token: '',
      );
    } catch (e) {
      
    print(e.toString());
      }
  }
}