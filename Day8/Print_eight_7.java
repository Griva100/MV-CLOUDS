public class Print_eight_7 {
    public static void main(String[] args) {
        int rows =5;
       for (int i = 1; i <= rows * 2 - 1; i++ ) 
		{
			if(i == 1 || i == rows || i == rows * 2 - 1)
			{
				for (int j = 1; j <= rows; j++ )
				{
					if(j == 1 || j == rows)
					{
						System.out.print(" ");
					}
					else
					{
						System.out.print("*");
					}
				}
			}
			else
			{
				for (int k = 1; k <= rows; k++ )
				{
					if(k == 1 || k == rows)
					{
						System.out.print("*");
					}
					else
					{
						System.out.print(" ");
					}
				}
			}
			System.out.println();
		}
    }
}
